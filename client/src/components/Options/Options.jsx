import React, { useState } from "react";
import DetailPage from "../DetailPage/DetailPage";
import { AnimatePresence, motion } from "framer-motion";
import "./Options.scss";

export default function Options({ data }) {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className="options">
      {!!data?.length ? (
        data.map((e, i) => {
          return (
            <motion.div
              initial={{ background: "var(--color-grey)" }}
              whileHover={{
                scale: 1.1,
                y: -3,
                color: "rgb(0,0,0)",
                background: "var(--color-primary)",
              }}
              className="option"
              onClick={() => setOpenDetail(e)}
              key={i}
            >
              {e}
            </motion.div>
          );
        })
      ) : (
        <h3>There isn't skills on this category</h3>
      )}
      <AnimatePresence>
        {openDetail && (
          <DetailPage skill={openDetail} setOpen={setOpenDetail}></DetailPage>
        )}
      </AnimatePresence>
    </div>
  );
}
