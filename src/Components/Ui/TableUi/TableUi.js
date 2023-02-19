import React from "react";

import { Button } from "@mui/material";
import { Delete, Edit, NoteAdd, Update } from "@mui/icons-material";

const TableUi = ({ header, data, onEdit, onDelete, edit, onChange,onUpdate }) => {
  console.log(header, data, "header,data");
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header.map((r, i) => (
              <th scope="col">{r.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <th scope="row">{r.id}</th>
              <td>
                {edit.todo_id === r.todo_id ? (
                  <input key={i} type="text" onChange={onChange} placeholder={edit.content} />
                ) : (
                  r.content
                )}
              </td>
              <td>
                <tr
                  scope="row"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {r.action.map((r2, i2) => (
                    <td key={i2}>
                      {r2.label === "edit" ? (
                        edit.todo_id != r.todo_id ? (
                          <Button
                            variant="contained"
                            color="success"
                            onClick={(e) => onEdit(r)}
                          >
                            <Edit />
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="success"
                            onClick={(e) => onUpdate(r)}
                          >
                           <Update/>
                          </Button>
                        )
                      ) : (
                        <Button
                          variant="contained"
                          color="success"
                          onClick={(e) => onDelete(r)}
                        >
                          <Delete />
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUi;
