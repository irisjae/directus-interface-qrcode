import InterfaceComponent from "./interface.vue";

export default {
  id: "qrcode",
  name: "QR-Code",
  description: "An Interface that shows a QR-Code representation of a String.",
  icon: "qr_code_2",
  component: InterfaceComponent,
  types: ["string"],
  options: ({ collection }) => [
    {
      field: "ecc",
      name: "Error Correction Level",
      type: "string",
      meta: {
        width: "half",
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "L", value: "L" },
            { text: "M", value: "M" },
            { text: "Q", value: "Q" },
            { text: "H", value: "H" },
          ],
        },
      },
    },
  ],
};
