import * as sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type EmailFormData = {
  from: string;
  subject: string;
  message: string;
};

export const POST = async (req: Request, res: Response) => {
  sgMail.setApiKey(process.env.SENDGRID_API as string);

  const reqBody = await req.json();
  const { from, subject, message }: EmailFormData = reqBody;
  const msg = {
    to: "dhakalnikesh2001@gmail.com",
    from: "joinmytube0@gmail.com",
    subject: subject,
    text: message,
    html: `<div>${message}</div><p>From: ${from}</p>`,
    replyTo: from,
  };

  try {
    const response = await sgMail.send(msg);
    if (response[0].statusCode === 202) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 403 }
      );
    } else if (typeof error === "string") {
      return NextResponse.json(
        { success: false, error: error },
        { status: 400 }
      );
    } else if (
      error !== null &&
      typeof error === "object" &&
      "message" in error
    ) {
      return NextResponse.json(
        { success: false, error: String(error.message) },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "Something went wrong" },
        { status: 400 }
      );
    }
  }

  // I don't know why the promise below is not working

  // return sgMail
  //   .send(msg)
  //   .then(() => {
  //     return NextResponse.json({ success: true }, { status: 200 });
  //   })
  //   .catch((error) => {
  //     return NextResponse.json({ success: false }, { status: 400 });
  //   });
};
