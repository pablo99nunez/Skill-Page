import React, { useState } from "react";
import DetailPage from "../DetailPage/DetailPage";
import { AnimatePresence, motion } from "framer-motion";
import "./Options.scss";

export default function Options({ data }) {
  const [openDetail, setOpenDetail] = useState(false);
  return (
    <div className="options">
      {data.map((e) => {
        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="option"
            onClick={() => setOpenDetail(e)}
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
