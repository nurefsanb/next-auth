import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

// Basit test: "Login" butonu görünmeli (giriş yapılmamışsa)
describe("Navbar", () => {
  it("shows Login button when not authenticated", () => {
    render(
      <SessionProvider session={null}>
        <Navbar />
      </SessionProvider>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
