import Phaser from 'phaser';
import React, { useEffect } from 'react'
import playingCard from '../../assets/playing_card.png';

const TableTopGame: React.FC = () => {
    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'table-top-game',
            scene: {
                preload: function(this: Phaser.Scene) {
                    this.load.image('card', playingCard);
                },
                create: function(this: Phaser.Scene) {
                    // Add an image to the game at position (400, 300)
                    const initialCard = this.add.image(400, 300, 'card').setInteractive();
                    initialCard.setScale(0.1);

                    // Example of adding interactivity: create and move a new card on click
                    this.input.on('pointerdown', () => {
                        const card = this.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(100, 500), 'card');
                        card.setScale(0.1);
                        card.setInteractive();
                        this.input.setDraggable(card);
                    });

                    // Add drag functionality to dynamically created cards
                    this.input.on('drag', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Image, dragX: number, dragY: number) => {
                        gameObject.x = dragX;
                        gameObject.y = dragY;
                    });
                }
            }
        };

        const game = new Phaser.Game(config);

        return () => {
            if (game) {
                game.destroy(true);
            }
        };
    }, []);

    return <div id="table-top-game" style={{ width: '800px', height: '600px' }} />;
}

export default TableTopGame;