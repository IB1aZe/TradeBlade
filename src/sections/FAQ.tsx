import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleClick(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="bg-white text-[#070A1B] py-28 px-4 md:px-10 flex flex-col items-center">
      {/* Title */}
      <h1 className="font-plex font-bold text-[28px] sm:text-[36px] md:text-[44px] text-center leading-tight mb-10 max-w-[800px]">
        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
      </h1>

      {/* Container accordion */}
      <div className="w-full max-w-[900px] flex flex-col gap-4">
        {/* Accordion 1 */}
        <Accordion
          sx={{
            backgroundColor: activeIndex === 1 ? "#6A54FF" : "#EAEFF0",
            color: activeIndex === 1 ? "white" : "#070A1B",
            borderRadius: "8px",
            transition: "0.2s ease",
          }}
          expanded={activeIndex === 1}
          onClick={() => handleClick(1)}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Что такое TradeBlade</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является официальным брокером Binance.
              <br />
              <br />
              Дает высокую скорость API и возможность регистрации Binance через
              TradeBlade в 1 клик.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 2 */}
        <Accordion
          sx={{
            backgroundColor: activeIndex === 2 ? "#6A54FF" : "#EAEFF0",
            color: activeIndex === 2 ? "white" : "#070A1B",
            borderRadius: "8px",
            transition: "0.2s ease",
          }}
          expanded={activeIndex === 2}
          onClick={() => handleClick(2)}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
              Что TradeBlade предлагает инвесторам
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion 3 */}
        <Accordion
          sx={{
            backgroundColor: activeIndex === 3 ? "#6A54FF" : "#EAEFF0",
            color: activeIndex === 3 ? "white" : "#070A1B",
            borderRadius: "8px",
            transition: "0.2s ease",
          }}
          expanded={activeIndex === 3}
          onClick={() => handleClick(3)}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">
              Должен ли я переводить средства на TradeBlade?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
