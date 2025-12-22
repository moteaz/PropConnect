import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user already exists (mock check)
    if (email === "existing@propconnect.com") {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    // Mock successful registration
    return NextResponse.json({
      token: "mock-jwt-token-" + Date.now(),
      user: {
        id: Date.now(),
        name: name,
        email: email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
