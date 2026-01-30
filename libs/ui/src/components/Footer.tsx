"use client";

import Link from "next/link";
import { ReactElement } from "react";

export const Footer = ({
  className,
  topContent,
  bottomContent,
  centerContent,
}: {
  className: string;
  topContent: ReactElement;
  bottomContent: ReactElement;
  centerContent: ReactElement;
}) => {
  return (
    <footer className={className}>
      {topContent}

      {centerContent}

      {bottomContent}
    </footer>
  );
};
