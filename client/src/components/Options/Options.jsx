import React, { useState } from "react";
import DetailPage from "../DetailPage/DetailPage";
import { AnimatePresence, motion } from "framer-motion";
import "./Options.scss";

export default function Options({ data }) {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className="options">
      {data.map((e, i) => {
        return (
          <motion.div
            initial={{ background: "var(--color-grey)" }}
            whileHover={{
              scale: 1.1,
              y: -3,
              color: "black",
              background: "var(--color-primary)",
            }}
            className="option"
            onClick={() => setOpenDetail(e)}
            key={i}
          >
            {e}
          </motion.div>
        );
      })}
      <AnimatePresence>
        {openDetail && (
          <DetailPage skill={openDetail} setOpen={setOpenDetail}></DetailPage>
        )}
      </AnimatePresence>
    </div>
  );
}
