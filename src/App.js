import React from "react";
import { ListaDeNotas } from "./componets/ListaDeNotas";
import { FormularioCadatro } from "./componets/FormularioCadastro";


function App() {
  return (
    <section>
      <FormularioCadatro/>
      <ListaDeNotas/>
    </section>
  );
}

export default App;