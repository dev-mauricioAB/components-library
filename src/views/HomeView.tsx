import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HomeView: React.FC = () => {
  return (
    <main>
      <Header title="Header in components library" />

      <section>
        <h1>Home View in Components Library</h1>
      </section>

      <Footer />
    </main>
  );
};
