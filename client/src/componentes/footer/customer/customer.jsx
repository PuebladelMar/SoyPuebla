import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./customer.css";

export default function Customer() {
  return (
    <div className="customer-container">
      <div>
        <h1>Preguntas Frecuentes</h1>
      </div>
      <div className="accordion-container">
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>¿Cómo elijo la talla adecuada?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Recomendamos consultar nuestra guía de tallas, que proporciona
              medidas precisas para cada prenda. Si tienes dudas adicionales, no
              dudes en contactarnos para obtener asesoramiento personalizado.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Qué tipos de tejidos utilizan en su ropa deportiva?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Utilizamos una variedad de tejidos de alta calidad, como
              poliéster, nylon y spandex, que ofrecen transpirabilidad,
              elasticidad y resistencia para una experiencia cómoda durante tus
              actividades físicas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Puedo devolver o cambiar una prenda si no me queda bien?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ¡Por supuesto! Si la prenda no se ajusta como esperabas, ofrecemos
              opciones de devolución y cambio dentro de un plazo determinado.
              Consulta nuestra política de devoluciones para obtener más
              detalles.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography> ¿Cómo cuidar y lavar mi ropa deportiva?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Recomendamos lavar las prendas a mano o en ciclo suave con agua
              fría para preservar la calidad de los tejidos y los colores. Evita
              el uso de suavizantes y secadoras, ya que pueden afectar la
              elasticidad y durabilidad de las prendas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Ofrecen envío internacional?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sí, realizamos envíos internacionales a varios países. Los
              detalles de envío, costos y tiempos estimados se proporcionan
              durante el proceso de compra.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>¿Tienen opciones de pago seguras?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sí, garantizamos la seguridad de tus datos. Aceptamos varios
              métodos de pago seguros, como tarjetas de crédito y PayPal, para
              facilitar tu experiencia de compra.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Puedo cancelar mi pedido después de realizarlo?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Si necesitas cancelar un pedido, contáctanos lo antes posible.
              Dependiendo del estado del pedido, podemos asistirte en el proceso
              de cancelación.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Ofrecen descuentos o promociones especiales?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sí, regularmente ofrecemos descuentos y promociones en nuestra
              tienda. Mantente atenta a nuestras redes sociales y boletines
              informativos para enterarte de las últimas ofertas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              ¿Cómo puedo ponerme en contacto con el servicio al cliente?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Puedes ponerte en contacto con nuestro equipo de servicio al
              cliente a través de nuestra página de contacto, donde encontrarás
              un formulario de consulta. Estamos aquí para ayudarte con
              cualquier pregunta o inquietud que tengas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          ></AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}
