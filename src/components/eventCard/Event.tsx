import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { IEvent } from '../../utils/eventData';
import DogSVG from '../svg/DogSVG';
import HorseSVG from '../svg/HorseSVG';
import Card from './Card';

const Event: React.FC<IEvent> = ({
  heading: {
    description,
    header,
    colorScheme: { primaryColor },
  },
  details,
  Svg,
}) => {
  return (
    <AnimateSharedLayout>
      <div className="flex justify-center md:h-40 max-w-5xl md:mx-auto">
        <div
          className={`flex justify-center flex-col text-${primaryColor} mb-3 w-full md:pb-5`}
        >
          <h3 className="xl:text-left">{header}</h3>
          {description.map((d) => (
            <p
              key={d}
              className="text-center text-sm xl:text-left md:text-base"
            >
              {d}
            </p>
          ))}
        </div>

        <div className="w-full -my-28 absolute md:relative ">
          <Svg />
        </div>
      </div>

      <motion.div
        layout
        initial={{ borderRadius: 10 }}
        className={`max-w-sm w-full mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-5xl xl:gap-10`}
      >
        {details.map((item) => (
          <Card key={item.text} {...item} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Event;
