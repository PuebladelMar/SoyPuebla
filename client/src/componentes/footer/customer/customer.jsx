import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./customer.css";

export default function Customer() {
  return (
    <div className="customer-container">
      <h1>Preguntas Frecuentes</h1>
      <span className="customer-text-underline"></span>
      <div className="accordion-container">
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Cómo puedo comprar en Puebla del Mar?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Las compras se realizan por nuestro e-commerce. Y puedes elegir la{" "}
              <a href="/shipment" className="link">
                forma de envío
              </a>{" "}
              o retirar por el punto más cercano. Para comprar, eliges tus
              productos, los seleccionas y desde el carrito de compras eliges la{" "}
              <a href="/payMethods" className="link">
                forma de pago.
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Tengo que estar registrada para poder comprar??</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Si, debes registrarte. El sistema te va a ir guiando para que
              completes los datos requeridos, como nombre, lugar de entrega y
              forma de pago.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Cómo sé cuál es mi talle?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lo primero que te sugerimos es que tomes tus medidas para poder
              tener una referencia real sobre tu cuerpo. Y a partir de esas
              medidas te guíes por nuestra{" "}
              <a href="/size-chart" className="link">
                tabla de talles
              </a>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Cómo sé si un producto tiene stock?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              En caso de estar agotado un producto, un cartel sobre el artículo
              te lo va a indicar. Podés dejar tu mail para que te avisemos
              cuando vuelva a estar disponible.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Cómo puedo pagar?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Podes abonar por transferencia, usando la opción de MERCADO PAGO o
              por CUENTA BANCARIA.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Cómo recibo mi producto Puebla del Mar?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>
                Los costos y tiempos estimados de entrega son los siguientes:
              </strong>
              <br />
              <br />
              <strong>
                Envío a domicilio a través de Correo Argentino:
              </strong>{" "}
              el costo del servicio es de $ XXX. El plazo estimado de entrega es
              entre 72 - 96hs hábiles desde el despacho del pedido.
              <br />
              <br />
              <strong>Retiro en sucursal de Correo Argentino:</strong> el costo
              del servicio es de $ XXX. El plazo estimado de entrega es entre 72
              - 96hs hábiles desde el despacho del pedido. Una vez despachado el
              envío te mandamos un correo con el número de seguimiento para que
              puedas ver el estado.
              <br />
              <br />
              <strong>Horarios de entrega Correo Argentino:</strong> lunes a
              viernes de 9 a 18hs y sábados de 9 a 13hs. Los usuarios no podrán
              elegir el día u horario en que se entregará su pedido.
              <br />
              <br />
              <strong>
                Por motomensaje (Sólo en la ciudad de La Plata y alrededores):
              </strong>{" "}
              Envío a domicilio, el costo del servicio es de $ 500 dentro del
              casco urbano y $700 alrededores. El plazo estimado de entrega es
              entre 48 / 72hs hábiles desde la acreditación de tu pedido. Una
              vez acreditado tu pago, nos ponemos en contacto para verificar tu
              dirección y coordinar el envío. El plazo puede ser dentro de las
              48/72 horas días hábiles, salvo excepcionalidades.{" "}
              <strong>NO SE REPARTE DÍAS DOMINGO.</strong>
              <br />
              <br />
              <strong>Puntos de retiro:</strong> Podes retirar tu compra sin
              cargo los siguientes puntos:
              <br />
              <strong>LA PLATA:</strong> Centro
              <br />
              <strong>CABA:</strong> Palermo.
              <br />
              Cuando acreditamos tu pago, el plazo de confirmación para retirar
              el pedido puede ser de 24 - 48hs hábiles, salvo excepcionalidades.
              La información te llega al email utilizado en el proceso de
              compra. Acordate que el número de compra será solicitado a la hora
              de retirar el pedido.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>
                ¿Qué pasá si llega mi producto y no estoy para recibirlo?
              </strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>xxxxx</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Qué pasá si llega mi producto no llega?</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Desde Puebla del Mar queremos que tu compra sea satisfactoria y
              puedas disfrutar de nuestros productos. Si por alguna razón el
              producto no llega a la dirección consignada, envíanos un correo
              electrónico a XXX desde donde podremos resolver tu consulta.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-summary"
          >
            <Typography>
              <strong>¿Puede recibir mi producto otra persona</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              En el caso del motomensaje puede ser recibido por otra persona en
              el domicilio consignado, quien debe firmar para acreditar la
              recepción del paquete.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
