import './action-bar.css';
import React from 'react';
import { useActions } from '../hooks/use-actions';
import { DeleteCellAction, MoveCellAction } from '../state/actions';

interface ActionBarProps {
    id: string;
}

interface ActionButtonProps {
    action: () => MoveCellAction | DeleteCellAction;
    icon: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ action, icon }) => {
    return (
        <button className="button is-primary is-small" onClick={action}>
            <span className="icon">
                <i className={`fas ${icon}`}></i>
            </span>
        </button>
    );
};

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions();
    return (
        <div className="action-bar">
            <ActionButton
                action={() => moveCell(id, 'up')}
                icon={'fa-arrow-up'}
            />
            <ActionButton
                action={() => moveCell(id, 'down')}
                icon="fa-arrow-down"
            />
            <ActionButton action={() => deleteCell(id)} icon="fa-times" />
        </div>
    );
};

export default ActionBar;
