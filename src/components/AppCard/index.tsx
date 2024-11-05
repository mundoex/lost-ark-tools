import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

export interface AppCardProps {
    imagePath?:string;
    title?:string;
    subtitle?:string;
    external?:boolean;
    onClick?: Function;
}
  
export function AppCard(props?:AppCardProps) {
    const cardPaddingBottom = props?.external ? '12px' : '30px';

    return (
        <Card sx={{ width: 200, borderRadius: 2, boxShadow: 3, cursor:'pointer' }}>
        <CardMedia
            component="img"
            height="140"
            image={props?.imagePath}
            alt={props?.title}
            onClick={()=>props?.onClick && props?.onClick()}
        />

        <CardContent style={{paddingBottom: cardPaddingBottom}} sx={{ bgcolor: '#333', color: '#fff', padding: '8px' }}>
            
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                {props?.title}
            </Typography>

            <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.8rem' }}>
                {props?.subtitle}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                {props?.external && 
                <>
                    <LinkIcon sx={{ fontSize: 14, color: '#b0b0b0', mr: 0.5 }}/>
                    <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.8rem' }}>External</Typography>
                </>
                }
            </Box>
            
        </CardContent>
        </Card>
  );
}
