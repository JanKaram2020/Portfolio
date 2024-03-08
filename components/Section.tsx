import React, {ReactNode} from 'react';

const Section = ({children, className=""}:{children:ReactNode, className?:string}) => {
  return (
    <div className={"ml-2.5 "+ className}>
      {children}
    </div>
  );
};

export default Section;
