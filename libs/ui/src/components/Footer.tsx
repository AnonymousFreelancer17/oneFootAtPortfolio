"use client";

export const Footer = ({className , list} : {className: string;list:any;}) => {
  return (
    <footer className={className}>
      {list?.map((d: any,index: any)=>{
        return <div key={index}>{d}</div>
      })}
    </footer>
  );
};

 
