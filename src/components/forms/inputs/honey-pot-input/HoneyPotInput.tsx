export const HoneyPotInput = ({ setValue }: { setValue: (v: string) => void }) => {
  return (
    <div className="hidden">
      <label htmlFor="invis">name</label>
      <input
        type="text"
        name="invis"
        // autoComplete="off"
        // tabIndex={-1}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
