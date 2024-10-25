"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import CodeTool from "@editorjs/code";
import RawTool from "@editorjs/raw";
import Attaches from "@editorjs/attaches";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";

const Editor = ({ onSave }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    editorInstance.current = new EditorJS({
      holder: "editorjs", // The ID of the holder where Editor.js will initialize
      autofocus: true,
      tools: {
        header: Header,
        quote: Quote,
        image: ImageTool,
        list: List,
        checklist: Checklist,
        link: LinkTool,
        embed: Embed,
        table: Table,
        delimiter: Delimiter,
        warning: Warning,
        code: CodeTool,
        raw: RawTool,
        attaches: Attaches,
        marker: Marker,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
      },
      placeholder: "Write your blog post here...",
      onReady: () => {
        console.log("Editor.js is ready!");
      },
    });

    return () => {
    //   editorInstance.current.destroy();
    };
  }, []);

  const handleSave = async () => {
    try {
      const savedData = await editorInstance.current.save();
      console.log("Saved Data: ", savedData);
      if (onSave) {
        onSave(savedData);
      }
    } catch (error) {
      console.error("Saving failed:", error);
    }
  };

  return (
    <div>
      <div id="editorjs" className="border border-gray-300 p-4 rounded"></div>
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default Editor;
