import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
