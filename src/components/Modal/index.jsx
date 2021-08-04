import { Box, Button, Layer, FormField, Select, TextInput, Text, Heading } from 'grommet';
import { useModal } from '../../provider/Modal';
import { useNasaPhoto } from '../../provider/GetImage';

export const Modal = () => {
    const { handleOpen, handleClose, showModal } = useModal();
    const { title, explanation } = useNasaPhoto();
    
    return (
        <Layer
          id="hello world"
          position="center"
          onClickOutside={handleClose}
          onEsc={handleClose}
        >
            <Box pad="medium" gap="small" width="large">
                <article>
                    <h2>{title}</h2>
                    <p>{explanation}</p>
                </article>
            </Box>
        </Layer>
    )
}