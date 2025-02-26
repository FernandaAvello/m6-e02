import React from "react";
import ListServices from '../Services/ListServices';

const HomeServices = () => (
  <>
    <section className="section_homeServices">
      <h1 className="title" style={{ paddingTop: '30px', color: 'white'}}>Nuestros servicios especializados</h1>
      <ListServices />
    </section>
  </>
);
export { HomeServices };