import { IErrorDetail } from './common';
import { IImageID } from './image-id.contract';
import { IProgressDetail } from './progress-detail.contract';

export interface IBuildInfo {
    id: string;

    stream: string;

    error: string;

    errorDetail: IErrorDetail;

    status: string;

    progress: string;

    progressDetail: IProgressDetail;

    aux: IImageID;
}
