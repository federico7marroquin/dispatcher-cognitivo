import React from 'react'
//button icons
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import TextFormatIcon from '@material-ui/icons/TextFormat';


export default function ToolBar(props) {

    return (
        <div>
            <TextFormatIcon />
            <AttachFileIcon />
            <AttachmentIcon />
            <InsertEmoticonIcon />
            <ImageIcon />
        </div>
    );
}