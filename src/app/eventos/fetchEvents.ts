interface Events {
  id: number;
  nome: string;
  totalEquipes: number;
  status: boolean;
  dataInicio: string;
  dataFim: string;
}

export const fakeEvents: Events[] = [
  {
    id: 1,
    nome: "Clube do Laço Coração Pantaneiro",
    totalEquipes: 5,
    status: true,
    dataInicio: "01/07/2025",
    dataFim: "03/07/2025",
  },
  {
    id: 2,
    nome: "Nova Dev no Squad: A Julyana Gusmão Arrasa no Front-end!",
    totalEquipes: 3,
    status: true,
    dataInicio: "05/07/2025",
    dataFim: "06/07/2025",
  },
  {
    id: 3,
    nome: "Clube das Desenvolvedoras Incríveis",
    totalEquipes: 10,
    status: false,
    dataInicio: "10/07/2025",
    dataFim: "12/07/2025",
  },
  {
    id: 4,
    nome: "Cinema com os devs",
    totalEquipes: 8,
    status: false,
    dataInicio: "15/07/2025",
    dataFim: "15/07/2025",
  },
  {
    id: 5,
    nome: "Hackathon Startup X",
    totalEquipes: 12,
    status: true,
    dataInicio: "20/07/2025",
    dataFim: "22/07/2025",
  },
  {
    id: 6,
    nome: "Conexão Criativa 360°",
    totalEquipes: 7,
    status: true,
    dataInicio: "22/07/2025",
    dataFim: "23/07/2025",
  },
  {
    id: 7,
    nome: "Tech Talks & Coffee",
    totalEquipes: 4,
    status: false,
    dataInicio: "25/07/2025",
    dataFim: "25/07/2025",
  },
  {
    id: 8,
    nome: "Summit Agile Minds",
    totalEquipes: 9,
    status: true,
    dataInicio: "28/07/2025",
    dataFim: "30/07/2025",
  },
  {
    id: 9,
    nome: "Inova Weekend",
    totalEquipes: 6,
    status: true,
    dataInicio: "01/08/2025",
    dataFim: "02/08/2025",
  },
  {
    id: 10,
    nome: "Workshop Mindset Digital",
    totalEquipes: 5,
    status: false,
    dataInicio: "03/08/2025",
    dataFim: "03/08/2025",
  },
  {
    id: 11,
    nome: "Pitch Perfect Pro",
    totalEquipes: 11,
    status: true,
    dataInicio: "07/08/2025",
    dataFim: "08/08/2025",
  },
  {
    id: 12,
    nome: "Networking Ninja",
    totalEquipes: 8,
    status: true,
    dataInicio: "10/08/2025",
    dataFim: "11/08/2025",
  },
];
