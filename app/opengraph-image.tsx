import { GithubIcon } from "@/icons/GithubIcon";
import { ImageResponse } from "next/server";

import { profile, drone } from "@/public/images";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Lucas Stella Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const url = (
    process.env.VERCEL_URL
      ? new URL(profile.src, `https://${process.env.VERCEL_URL}`)
      : new URL(profile.src, `http://localhost:${process.env.PORT || 3000}`)
  ).toString();

  const image = await fetch(url).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 96,
          background:
            "linear-gradient(0deg, rgba(156,168,131,1) 0%, rgba(163,177,138,1) 9%)",
          color: "rgb(52, 78, 65)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            boxShadow: "20px 20px 60px #858f6f,-20px -20px 60px #b3c197",
            borderRadius: "0px 50px 50px 0px",
            padding: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              marginLeft: "2rem",
            }}
          >
            Lucas Stella
            <div style={{ fontSize: 48 }}>Software Engineer</div>
          </div>
        </div>
        <div
          style={{
            color: "black",
            position: "absolute",
            left: 32,
            bottom: 32,
            display: "flex",
            fill: "black",
            gap: 32,
          }}
        >
          <GithubIcon dim={84} fill="rgb(52, 78, 65)" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            height={84}
            width={84}
            style={{ fill: "rgb(52, 78, 65)" }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            height={84}
            width={100}
            style={{ fill: "rgb(52, 78, 65)" }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
            height={84}
            width={84}
            style={{ fill: "rgb(52, 78, 65)" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: 128,
            display: "flex",
            width: 400,
            height: 400,
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          {/* @ts-ignore */}
          <img src={image} alt="Profile" width={400} height={400} />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
