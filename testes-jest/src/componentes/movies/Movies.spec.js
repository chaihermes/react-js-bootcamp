import video from './Movies';

    test('plays video', () => {
        const spyPlay = jest.spyOn(video, 'play');  //variável e função do arquivo movies.js
        video.play();

        expect(spyPlay).toHaveBeenCalledTimes(1);
    });