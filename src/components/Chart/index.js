import { Box } from "@mui/system";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import CustomLabel from "./CustomLabel";

const colors = ["#0088FE", "#00C49F"];

const Chart = ({ value }) => {
  const data = value.map((v, index) => ({ value: v, fill: colors[index] }));

  return (
    <Box height={240}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            <Label
              content={
                <CustomLabel
                  value={Math.floor((value[1] / value[0]) * 100) + "%"}
                  description="от дохода"
                />
              }
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default Chart;
