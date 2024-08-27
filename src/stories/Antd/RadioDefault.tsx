import React from 'react';
import { Radio } from 'antd';

export interface RadioProps {
    /**
     * Button contents
     */
    label: string;
  }

export const RadioDefault: React.FC = (props: RadioProps) => <Radio>{props.label}</Radio>;