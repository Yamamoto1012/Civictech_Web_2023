function CaseTitle({ title, color }) {
  return (
    <div className="h-20 w-full flex flex-col justify-center items-center p-2">
      <h3 className="text-xl md:text-3xl font-semibold mb-2">{title}</h3>
      <div className={`h-2 w-full md:w-96 rounded-3xl ${color}`}></div>
    </div>
  );
}

export default CaseTitle;
