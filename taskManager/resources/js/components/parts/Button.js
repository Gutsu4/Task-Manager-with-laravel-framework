import React from "react";

// 編集ボタンコンポーネント
export const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary me-2">
      Edit
    </button>
  );
};

// 削除ボタンコンポーネント
export const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-danger">
      Delete
    </button>
  );
};
