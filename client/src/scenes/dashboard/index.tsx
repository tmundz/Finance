import { Box, useMediaQuery} from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";


const gridTemplateLgScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;

const gridTemplateSmScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

const Dashboard = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1200px)');
  return (
    /* Grid split
    Horizontal 
    3 units split even 
    Vertically 10 units 
    4,4,3,
    3,2,3,
    3,4,2,
        2 */
    <Box width="100%" height="100%" display="grid" gap="1.5rem"
    sx={
        isAboveMediumScreens ?{
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLgScreens,
        } : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmScreens,
            }
    }>
        <Row1 />
        <Row2 />
        <Row3 />
    </Box>
  );
};

export default Dashboard;