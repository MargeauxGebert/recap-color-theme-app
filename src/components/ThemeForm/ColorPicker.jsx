import useLocalStorageState from "use-local-storage-state";

const initialValue = [
   { 
    role: "primary",
  value: "#7F95D1",
   }
];

export function ColorPicker() {
  const [pickedColor, setPickedColor] = useLocalStorageState("pickedColor", {
    defaultValue: initialValue,
  });
  console.log(pickedColor.primary);
  return (
    <div className="form__color-input">
      <label htmlFor="color-primary"></label>
      <input
        type="color"
        id="color-primary"
        name="primary"
        defaultValue={pickedColor.value}
      />
      <div className="form__color-input-info">
        <p>{pickedColor.role}</p>
        <label htmlFor="color-hex"></label>
        <input type="text" id="color-hex" defaultValue={pickedColor.value} />
      </div>
    </div>
  );
}
