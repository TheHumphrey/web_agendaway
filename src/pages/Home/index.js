import React from "react";

import { Layout, TableAgenda, Navbar, Agendamento } from "../../components";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <TableAgenda />
      <Agendamento />
    </Layout>
  );
};

export default Home;
