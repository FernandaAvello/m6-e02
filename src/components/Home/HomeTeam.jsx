import React from "react";
import { ListDoctors } from '../Teams/ListDoctors';

const HomeTeam = () => (
  <>
    <section className="section_homeTeam">
      <h1 className="title" style={{ paddingTop: '30px'}}>Nuestros equipo de profesionales</h1>
      <div style={{ marginLeft: '60px' }}>
        <ListDoctors />
      </div>
    </section>
  </>
);
export { HomeTeam };