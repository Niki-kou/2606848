import { Box, Typography, Link } from "@mui/material";

export default function MdxImage({
  src,
  alt,
  desc,
  descHref,
  imageDesc,
  side = "right",
  width = "clamp(18rem, 34vw, 30rem)",
  scale = 100,
  ...props
}) {
  const safeScale = Math.min(100, Math.max(0, scale));

  return (
    <Box
      sx={{
        float: { xs: "none", md: side },
        width: {
          xs: `${safeScale}%`,
          sm: `min(${safeScale}%, 30rem)`,
          md: `calc(${width} * ${safeScale / 100})`,
        },
        maxWidth: { xs: "100%", md: "50%" },
        mx: { xs: "auto", md: 0 },
        ml: { xs: 0, md: side === "right" ? 3 : 0 },
        mr: { xs: 0, md: side === "left" ? 3 : 0 },
        mt: 0.5,
        mb: 2,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        {...props}
        sx={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: 1,
          boxShadow: "0 10px 24px rgba(39, 44, 42, 0.14)",
        }}
      />

      {desc && (
        <Typography
          component="p"
          sx={{
            mt: 0.75,
            fontSize: "0.75rem",
            lineHeight: 1.4,
            color: "text.secondary",
          }}
        >
          {descHref ? (
            <Link href={descHref} target="_blank" rel="noreferrer">
              {desc}
            </Link>
          ) : (
            desc
          )}
        </Typography>
      )}

      {imageDesc && <Typography>{imageDesc}</Typography>}
    </Box>
  );
}
