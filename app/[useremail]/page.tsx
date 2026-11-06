"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

export default function EmailDownloadPage() {
  const { useremail } = useParams<{ useremail: string }>();
  const downloaded = useRef(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(useremail ?? "");

  useEffect(() => {
    if (!isValidEmail || downloaded.current) return;
    downloaded.current = true;

    const link = document.createElement("a");
    link.href = "/api/download";
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [isValidEmail]);

  return null;
}
