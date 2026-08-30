import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login first",
        },
        { status: 401 }
      );
    }

    if (session.user.role === "admin") {
      return NextResponse.json(
        {
          success: false,
          message: "Admin cannot book appointments",
        },
        { status: 403 }
      );
    }

    const body = await request.json();

    const {
      name,
      phone,
      service,
      date,
      time,
      message,
    } = body;

    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const existingAppointment =
      await Appointment.findOne({
        date,
        time,
        status: {
          $ne: "cancelled",
        },
      });

    if (existingAppointment) {
      return NextResponse.json(
        {
          success: false,
          message: "This time slot is already booked",
        },
        { status: 409 }
      );
    }

    const appointment = await Appointment.create({
      userId: session.user.id,
      name,
      phone,
      service,
      date,
      time,
      message: message || "",
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully",
        appointment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment POST error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to book appointment",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    await connectDB();

    let appointments;

    if (session.user.role === "admin") {
      appointments = await Appointment.find({})
        .sort({ createdAt: -1 })
        .lean();
    } else {
      appointments = await Appointment.find({
        userId: session.user.id,
      })
        .sort({ createdAt: -1 })
        .lean();
    }

    return NextResponse.json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.error("Appointment GET error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch appointments",
      },
      { status: 500 }
    );
  }
}