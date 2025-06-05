import { useState, useEffect } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { ModalContainer, ModalHeader, Overlay } from "./styles";
import { InputsWrapper } from "./styles";
import { format } from "date-fns";
import { Switch } from "../Switch";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  title: string;
  defaultValues?: {
    nome?: string;
    totalEquipes?: string;
    dataInicio?: string;
    dataFim?: string;
    status?: boolean;
  };
}

export default function EventModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  defaultValues = {},
}: EventModalProps) {
  const [nome, setNome] = useState("");
  const [totalEquipes, setTotalEquipes] = useState("");
  const [dataInicio, setDataInicio] = useState<Date | null>(null);
  const [dataFim, setDataFim] = useState<Date | null>(null);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setNome(defaultValues.nome || "");
      setTotalEquipes(defaultValues.totalEquipes || "");
      setDataInicio(
        defaultValues.dataInicio
          ? convertToDate(defaultValues.dataInicio)
          : null
      );
      setDataFim(
        defaultValues.dataFim ? convertToDate(defaultValues.dataFim) : null
      );
      setStatus(
        defaultValues.status !== undefined ? defaultValues.status : true
      );
    }
  }, [isOpen, defaultValues]);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedInicio = dataInicio ? format(dataInicio, "dd/MM/yyyy") : "";
    const formattedFim = dataFim ? format(dataFim, "dd/MM/yyyy") : "";

    const eventData = {
      nome,
      totalEquipes,
      dataInicio: formattedInicio,
      dataFim: formattedFim,
      status,
    };

    onSubmit(eventData);
    onClose();
  };

  function convertToDate(dateStr: string) {
    const [day, month, year] = dateStr.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={onClose}>✕</button>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <InputsWrapper>
            {title === "Editar Evento" && (
              <Switch
                checked={status}
                onChange={setStatus}
                label={status ? "Ativo" : "Inativo"}
              />
            )}

            <Input
              label="Nome do Evento"
              name="nome"
              value={nome}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNome(e.target.value)
              }
              placeholder="Digite o nome do evento"
              required
            />
            <Input
              label="Total de Equipes"
              name="totalEquipes"
              value={totalEquipes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTotalEquipes(e.target.value)
              }
              placeholder="Ex: 8"
              required
            />
            <Input
              label="Data de Início"
              name="dataInicio"
              value={dataInicio}
              onChange={(date: Date) => setDataInicio(date)}
              useDatePicker
              required
            />
            <Input
              label="Data de Fim"
              name="dataFim"
              value={dataFim}
              onChange={(date: Date) => setDataFim(date)}
              useDatePicker
              required
            />
          </InputsWrapper>
          <Button width="299px" style={{ marginTop: "25px" }} type="submit">
            Salvar
          </Button>
        </form>
      </ModalContainer>
    </Overlay>
  );
}
