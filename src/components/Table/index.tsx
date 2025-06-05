import React, { useState } from "react";
import {
  TableWrapper,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  ActionButton,
  DottedLine,
  DropdownMenu,
  StatusIndicator,
  DropdownItem,
} from "./styles";
import { AiOutlineMore } from "react-icons/ai";

interface TableProps {
  columns: { label: string; key: string }[];
  data: Record<string, any>[];
  page?: number;
  itemsPerPage?: number;
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(
    null
  );
  const handleToggleDropdown = (index: number) => {
    setDropdownOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <TableWrapper>
      <TableHead>
        <TableRow>
          {columns.map((col, idx) => (
            <TableHeader key={col.key} isLast={idx === columns.length - 1}>
              {col.label}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>

      <DottedLine />

      <TableBody>
        {data.map((event) => {
          return (
            <TableRow key={event.id}>
              {columns.map((col) => {
                if (col.key === "actions") {
                  return (
                    <TableData
                      key={col.key}
                      isLast={true}
                      style={{ position: "relative" }}
                    >
                      <ActionButton
                        onClick={() => handleToggleDropdown(event.id)}
                        aria-label="Ações do evento"
                      >
                        <AiOutlineMore size={24} title="Ações" />
                      </ActionButton>

                      {dropdownOpenIndex === event.id && (
                        <DropdownMenu>
                          <DropdownItem
                            onClick={() => {
                              onEdit?.(event.id);
                              setDropdownOpenIndex(null);
                            }}
                          >
                            Editar Evento
                          </DropdownItem>

                          <DropdownItem
                            onClick={() => {
                              onDelete?.(event.id);
                              setDropdownOpenIndex(null);
                            }}
                          >
                            Excluir Evento
                          </DropdownItem>
                        </DropdownMenu>
                      )}
                    </TableData>
                  );
                }

                if (col.key === "status") {
                  const isActive = Boolean(event[col.key]);
                  return (
                    <TableData key={col.key}>
                      <StatusIndicator active={isActive}>
                        {isActive ? "Ativo" : "Inativo"}
                      </StatusIndicator>
                    </TableData>
                  );
                }

                return (
                  <TableData key={col.key}>{String(event[col.key])}</TableData>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
