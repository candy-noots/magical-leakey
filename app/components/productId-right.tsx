import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";

export default function ProductIdRight({product}:any) {
    return   <Grid size={6} sx={{ mt: 15 }}>
            <Typography variant={"h4"}>{product.title}</Typography>
            <Typography variant={"h4"}>{product.weight}</Typography>
            <Typography variant="subtitle1" gutterBottom>
              {product.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                backgroundColor: "rgb(246, 246, 246)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{ width: "100%", textAlign: "center", my: "auto" }}
              >
                {product.price} $
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#ffeb3b",
                  width: "100%",
                  color: "black",
                  py: 1.5,
                  m: 1.2,
                  borderRadius: 3,
                  fontWeight: "normal",
                }}
              >
                У кошик
              </Button>
            </Box>

            <Typography variant="h5">Хочу додати</Typography>

            <Accordion
              sx={{
                border: "none",
                borderColor: "transparent",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                sx={{
                  border: "none",
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Сири</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  border: "none",
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: yellow[500],
                        "&.Mui-checked": {
                          color: yellow[500],
                        },
                      }}
                      defaultChecked
                    />
                  }
                  label="Бортик сирно-ковбасний +65 ₴"
                />
              </AccordionDetails>
            </Accordion>

            {product.group_modifiers.map((e: any) => {
              return (
                <div>
                  <Typography variant="subtitle1">{e.title}</Typography>
                  {e.modifiers.map((e: any) => {
                    return (
                      <div className="flex flex-col flex-wrap">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{
                                color: yellow[500],
                                "&.Mui-checked": {
                                  color: yellow[500],
                                },
                              }}
                              defaultChecked
                            />
                          }
                          label={e.title + " " + e.price + "$"}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: yellow[500],
                    "&.Mui-checked": {
                      color: yellow[500],
                    },
                  }}
                  defaultChecked
                />
              }
              label="Бортик сирно-ковбасний +65 ₴"
            />
          </Grid>
}