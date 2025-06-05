import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatPeriod(dataInicio: Date, dataFim: Date): string {
  const mesmoMes = dataInicio.getMonth() === dataFim.getMonth();
  const mesmoAno = dataInicio.getFullYear() === dataFim.getFullYear();

  if (mesmoMes && mesmoAno) {
    return `${dataInicio.getDate()} a ${dataFim.getDate()} de ${format(dataFim, "MMMM", { locale: ptBR })}`;
  }

  return `${format(dataInicio, "d 'de' MMMM", { locale: ptBR })} a ${format(dataFim, "d 'de' MMMM", { locale: ptBR })}`;
}
