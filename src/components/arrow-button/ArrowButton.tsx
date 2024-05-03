import React from 'react';

import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = (isOpen: boolean) => void;

interface ArrowButtonProps {
	onClick: OnClick;
	isOpen: boolean;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
	onClick,
	isOpen,
}) => {
	const handleClick = () => {
		onClick(!isOpen); // Передаем обратно значение isOpen
	};

	return (
		<div
			role='button'
			aria-label={
				isOpen
					? 'Закрыть форму параметров статьи'
					: 'Открыть форму параметров статьи'
			}
			tabIndex={0}
			className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
			onClick={handleClick} // Обрабатываем клик и передаем значение isOpen
		>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={isOpen ? styles.arrow_open : styles.arrow}
			/>
		</div>
	);
};
