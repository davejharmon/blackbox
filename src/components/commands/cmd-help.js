export const processHelpCommand = () => {
  return (
    <div>
      <p>For more information on a specific command, type HELP command-name:</p>
      <pre>{`RESTART \t restart your journey`}</pre>
      <pre>{`REFUEL \t\t load a fuel cartridge into ship engine`}</pre>
      <pre>{`SCAN \t\t search for compatible devices in range`}</pre>
      <pre>{`LINK \t\t attempt to link to compatible device`}</pre>
      <pre>{`LS \t\t\t list files in database`}</pre>
      <pre>{`OPEN \t\t open file (clearance required)`}</pre>
      <pre>{`SSH \t\t secure socket login to compatible device`}</pre>
      <p>For more information on console commands, consult the user manual.</p>
    </div>
  );
};
