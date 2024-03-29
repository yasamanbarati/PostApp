import { Grid, Typography } from '@mui/material'

interface props {
  index: string | undefined
}

const indexStyle = {
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '0',
  letterSpacing: '0em',
  color: '#888888',
  width: { md: '30px', xs: '25px' },
  height: { md: '30px', xs: '25px' },
  backgroundColor: '#ececec',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const PostCardIndex = ({ index }: props) => {
  return (
    <Grid item xs={1}>
      <Typography sx={indexStyle}>{index}</Typography>
    </Grid>
  )
}
