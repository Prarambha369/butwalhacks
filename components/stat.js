import {Flex, Text} from "theme-ui";

const isEmpty = (value) => value == null || value === '' || (Array.isArray(value) && value.length === 0);

const Stat = ({
                  value,
                  label,
                  unit = "",
                  color = "text",
                  of,
                  center = false,
                  reversed = false,
                  half = false,
                  lg = false,
                  sm = false,
                  ...props
              }) => (
    <Flex
        {...props}
        sx={{
            fontFamily: "heading",
            flexDirection: reversed ? "column-reverse" : "column",
            lineHeight: 1,
            ...props.sx,
        }}
    >
        <Flex
            sx={{
                alignItems: "center",
                justifyContent: center ? "center" : "start",
                position: "relative",
            }}
        >
            <Text
                as="span"
                sx={{
                    color,
                    fontSize: lg ? [5, 6, 7] : sm ? [3, 4] : [5, 6],
                    fontWeight: "heading",
                    letterSpacing: "title",
                    my: 0,
                }}
            >
                {value || "—"}
            </Text>
            {!isEmpty(unit) && (
                <Text
                    as="sup"
                    sx={{
                        fontSize: lg ? [2, 3] : sm ? [1, 1] : [1, 2],
                        color: color === "text" ? "secondary" : color,
                        ml: [null, unit === "%" ? 1 : null],
                        mr: [null, 1],
                        pt: [null, 1],
                    }}
                >
                    {unit}
                </Text>
            )}
            {!isEmpty(of) && (
                <Text
                    as="sup"
                    sx={{
                        fontSize: lg ? [2, 3] : [1, 2],
                        color: "muted",
                        ml: [null, 1],
                        pt: [null, 1],
                        "::before": {
                            content: '"/"',
                        },
                    }}
                >
                    {of}
                </Text>
            )}
        </Flex>
        {!isEmpty(label) && (
            <Text
                as="span"
                variant="caption"
                sx={{
                    fontSize: lg ? [1, 2, 3] : 1,
                    letterSpacing: "headline",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </Text>
        )}
    </Flex>
);

export default Stat;
