import React, { Component } from 'react';
import song from '../assets/fire.mp3';
import night from '../assets/night.wav';
import stream from '../assets/water.mp3';
import { FaFireAlt } from 'react-icons/fa';
import { MdNightsStay } from 'react-icons/md';
import { BiWater } from 'react-icons/bi';

class Footer extends Component {
  state = {
    audio: new Audio(song),
    audio2: new Audio(night),
    audio3: new Audio(stream),
    activeSound: null,
    audioError: '',
  };

  componentWillUnmount() {
    [this.state.audio, this.state.audio2, this.state.audio3].forEach((audio) => {
      audio.pause();
    });
  }

  toggleSound = (soundName) => {
    const sounds = {
      fire: this.state.audio,
      night: this.state.audio2,
      stream: this.state.audio3,
    };
    const selectedAudio = sounds[soundName];

    if (this.state.activeSound === soundName) {
      selectedAudio.pause();
      this.setState({ activeSound: null, audioError: '' });
      return;
    }

    Object.values(sounds).forEach((audio) => audio.pause());
    selectedAudio.loop = true;
    this.setState({ activeSound: soundName, audioError: '' });

    selectedAudio.play().catch(() => {
      this.setState((state) => state.activeSound === soundName
        ? {
          activeSound: null,
          audioError: 'Audio could not be played. Please try again.',
        }
        : null);
    });
  };

  render() {
    const sounds = [
      { id: 'fire', label: 'Fire', icon: <FaFireAlt /> },
      { id: 'night', label: 'Night ambience', icon: <MdNightsStay /> },
      { id: 'stream', label: 'Creek', icon: <BiWater /> },
    ];

    return (
      <div className="sound-player">
        {sounds.map((sound) => {
          const isPlaying = this.state.activeSound === sound.id;
          return (
            <button
              type="button"
              className={`sound-button${isPlaying ? ' is-playing' : ''}`}
              key={sound.id}
              aria-pressed={isPlaying}
              aria-label={`${isPlaying ? 'Pause' : 'Play'} ${sound.label}`}
              onClick={() => this.toggleSound(sound.id)}
            >
              <span className="sound-icon" aria-hidden="true">{sound.icon}</span>
              <span>{sound.label}</span>
              <span className="sound-state">{isPlaying ? 'Playing' : 'Play'}</span>
            </button>
          );
        })}
        {this.state.audioError && <p className="sound-error" role="alert">{this.state.audioError}</p>}
      </div>
    );
  }
}

export default Footer;
