import React from "react";
import { useAlert } from "react-alert-with-buttons";

export default function DeleteButton({ onClickDeleteButton }) {
  const alert = useAlert();
  return (
    <>
      <button className="btn btn-danger"
        onClick={() => {
          alert.open({
            message: "Are you sure you want to delete?",
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                  onClickDeleteButton();
                  alert.close();
                },

                style: {
                  backgroundColor: "crimson",
                },
              },
              {
                label: "No",
                onClick: () => {
                  alert.close();
                },
              },
            ],
          });
        }}
      >
        Delete
      </button>
    </>
  );
}
