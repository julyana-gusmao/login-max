"use client";

import { useState, useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import {
  Container,
  HeaderWelcome,
  Title,
  ControlsWrapper,
  ContentWrapper,
  TableWrapper,
  HeaderWrapper,
} from "./styles";
import { fakeEvents as initialEvents } from "./fetchEvents";
import SortSelector from "@/components/SortSelector";
import EventModal from "@/components/EventModal";
import ConfirmModal from "@/components/ConfirmModal";
import { parseDateFromString } from "@/utils/parseDateFromString";
import { formatPeriod } from "@/utils/formatPeriod";

export default function EventosPage() {
  const { user } = useAuth();
  const [events, setEvents] = useState(initialEvents);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("data");

  const [modalState, setModalState] = useState<{
    type: "add" | "edit" | "delete" | null;
    eventId: number | null;
  }>({ type: null, eventId: null });

  const openAddModal = () => setModalState({ type: "add", eventId: null });
  const openEditModal = (id: number) =>
    setModalState({ type: "edit", eventId: id });
  const openDeleteModal = (id: number) =>
    setModalState({ type: "delete", eventId: id });

  const closeModal = () => setModalState({ type: null, eventId: null });

  const handleAddEvent = (newEvent: any) => {
    setEvents((prev) => [...prev, { ...newEvent, status: true }]);
    closeModal();
  };

  const handleUpdateEvent = (updatedEvent: any) => {
    if (modalState.eventId === null) return;
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === modalState.eventId ? { ...ev, ...updatedEvent } : ev
      )
    );
    closeModal();
  };

  const handleDeleteEvent = () => {
    if (modalState.eventId === null) return;
    setEvents((prev) => prev.filter((ev) => ev.id !== modalState.eventId));
    closeModal();
  };

  const filteredEvents = useMemo(() => {
    const filtered = events.filter((e) =>
      e.nome.toLowerCase().includes(search.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortBy === "data") {
        const parseDate = (str: string) => {
          const [d, m, y] = str.split("/");
          return new Date(+y, +m - 1, +d);
        };
        return (
          parseDate(a.dataInicio).getTime() - parseDate(b.dataInicio).getTime()
        );
      } else if (sortBy === "nome") {
        return a.nome.localeCompare(b.nome);
      } else if (sortBy === "status") {
        return (b.status ? 1 : 0) - (a.status ? 1 : 0);
      }
      return 0;
    });
  }, [events, search, sortBy]);

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const currentPageEvents = filteredEvents.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const currentPageEventsFormatted = currentPageEvents.map((event) => {
    const dataInicio = parseDateFromString(event.dataInicio);
    const dataFim = parseDateFromString(event.dataFim);

    return {
      ...event,
      dataRange: formatPeriod(dataInicio, dataFim),
    };
  });

  const columns = [
    { label: "Nome do Evento", key: "nome" },
    { label: "Total de Equipes", key: "totalEquipes" },
    { label: "Status", key: "status" },
    { label: "Data", key: "dataRange" },
    { label: "", key: "actions" },
  ];

  const selectedEvent = modalState.eventId
    ? events.find((ev) => ev.id === modalState.eventId)
    : null;

  return (
    <Container>
      <HeaderWrapper>
        <HeaderWelcome>
          Bem-vindo de volta, <strong>{user?.name}</strong>
        </HeaderWelcome>
        <Title>Todos eventos</Title>
      </HeaderWrapper>

      <ContentWrapper>
        <ControlsWrapper>
          <div className="left">
            <SortSelector sortBy={sortBy} onChange={setSortBy} />
          </div>

          <div className="right">
            <SearchInput
              placeholder="Buscar evento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={openAddModal} icon={<AiOutlinePlus size={20} />}>
              Inserir Novo
            </Button>
          </div>
        </ControlsWrapper>

        <TableWrapper>
          <Table
            columns={columns}
            data={currentPageEventsFormatted}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
            page={page}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </TableWrapper>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </ContentWrapper>

      {(modalState.type === "add" || modalState.type === "edit") && (
        <EventModal
          title={
            modalState.type === "edit" ? "Editar Evento" : "Inserir Evento"
          }
          isOpen={true}
          onClose={closeModal}
          onSubmit={
            modalState.type === "edit" ? handleUpdateEvent : handleAddEvent
          }
          defaultValues={
            modalState.type === "edit" && selectedEvent
              ? {
                  ...selectedEvent,
                  totalEquipes: String(selectedEvent.totalEquipes),
                }
              : {
                  nome: "",
                  totalEquipes: "",
                  dataInicio: "",
                  dataFim: "",
                  status: true,
                }
          }
        />
      )}

      {modalState.type === "delete" && modalState.eventId !== null && (
        <ConfirmModal
          isOpen={true}
          title="Confirmar Exclusão"
          message={
            <>
              Tem certeza que deseja excluir o evento{" "}
              <strong>{selectedEvent?.nome}</strong>?
            </>
          }
          onConfirm={handleDeleteEvent}
          onCancel={closeModal}
          confirmText="Excluir"
          cancelText="Cancelar"
          confirmColor="red"
        />
      )}
    </Container>
  );
}
